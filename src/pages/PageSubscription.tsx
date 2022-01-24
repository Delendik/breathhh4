import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react-lite'
import { Helmet } from 'react-helmet-async'
import dayjs from 'dayjs'

import { PlansStore, usePlansStore } from 'src/store/PlansStore'
import { UserStore } from 'src/store/UserStore'

import { LayoutBase } from 'src/components/LayoutBase'
import { Button } from 'src/components/Button'
import { PADDLE_SANDBOX, PADDLE_VENDOR_ID } from 'src/utils/envs'

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 70px;
`

const CurrentSub = styled.div`
  display: flex;
  margin-top: 20px;
`

const Banner = styled.div`
  display: grid;
  gap: 10px;
  padding: 12px 16px;
  background: #f1f2f2;
  border-radius: 6px;

  &:first-child {
    margin-top: 0;
  }
`

const BannerTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`

const BannerText = styled.div`
  color: #71727b;
  font-size: 16px;
  line-height: 20px;
`

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Paddle: any
  }
}

export const PageSubscription: React.FC<RouteComponentProps> = observer(() => {
  const { plans } = usePlansStore()

  const handleCancel = async () => {
    await PlansStore.cancel()
  }

  const handleBuy = async (id: string) => {
    if (!id) {
      console.log(`🍅 no product id`)
      return
    }

    if (PADDLE_SANDBOX) {
      console.log(`💰 PADDLE Environment sandbox`)
      window.Paddle.Environment.set(`sandbox`)
    }

    if (PADDLE_VENDOR_ID) {
      const setup = { vendor: PADDLE_VENDOR_ID }
      console.log(`💰 PADDLE pay setup`, setup)
      window.Paddle.Setup(setup)

      const config = {
        email: UserStore.user?.email,
        product: id,
        passthrough: JSON.stringify({ user_id: UserStore.user?.id }),
        successCallback: () => {
          window.location.reload()
        },
      }

      console.log(`💰 PADDLE pay config`, config)

      window.Paddle.Checkout.open(config)
    }
  }

  const handleActivateTrial = async () => {
    await PlansStore.enableTrial()
  }

  return (
    <LayoutBase enableNav>
      <Helmet>
        <script src="https://cdn.paddle.com/paddle/paddle.js" />
      </Helmet>
      <div>
        <Content>
          {plans.map((plan, index) => {
            const isPlanTrial = plan.recurring_type === `trial`

            const isPlanSubscribe =
              plan.recurring_type === `monthly` || plan.recurring_type === `yearly`

            const trialStartDay = dayjs(UserStore.user?.trial_from).format(`YYYY-MM-DD`)

            return (
              <Banner key={index}>
                <BannerTitle>{plan.title}</BannerTitle>
                <BannerText>{plan.description}</BannerText>

                {isPlanTrial &&
                  (UserStore.isOnActiveTrial ? (
                    <Button disabled>Activated from {trialStartDay}</Button>
                  ) : (
                    <Button onClick={handleActivateTrial}>Activate</Button>
                  ))}

                {isPlanSubscribe &&
                  (UserStore.selectUserActiveSubscription?.external_plan_id === plan.external_id ? (
                    <Button onClick={handleCancel}>Cancel Subscription</Button>
                  ) : (
                    <Button onClick={() => handleBuy(plan.external_id)}>Buy</Button>
                  ))}
              </Banner>
            )
          })}
        </Content>

        {UserStore.selectUserActiveSubscription && (
          <CurrentSub>
            <Banner>
              <BannerTitle>
                Current plan: {UserStore.selectUserActiveSubscription.plan_title}
              </BannerTitle>
              <BannerText>
                Next payment: {UserStore.selectUserActiveSubscription.next_bill_date} ($
                {UserStore.selectUserActiveSubscription.plan_price})
              </BannerText>
            </Banner>
          </CurrentSub>
        )}
      </div>
    </LayoutBase>
  )
})
