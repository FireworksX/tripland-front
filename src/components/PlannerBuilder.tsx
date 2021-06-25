import { FC } from 'react'
import styled from 'styled-components'
import { IconPlacemark } from '~/components/icons/IconPlacemark'
import { IconCalendar } from '~/components/icons/IconCalendar'
import { useStore } from '~/hooks/useStore'
import Touchable from '~/components/Touchable'
import { IconClose } from '~/components/icons/IconClose'
import DateFormatter from '~/components/DateFormatter'
import { buildFont } from '~/utils/styledBuilder'

interface PlannerBuilder {
  onSubmit: () => any
}

const Root = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.radius.main};
  padding: ${({ theme }) => theme.paddings.main};
  box-shadow: 0px 0px 50px rgba(188, 188, 188, 0.25);
`

const Filter = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.main};
  margin-bottom: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 90%;
    left: 5%;
    top: 50%;
    background: ${({ theme }) => theme.colors.border};
  }
`

const FilterButton = styled.button<{ isWide?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
  outline: none;
  border: none;
  height: 50px;
  grid-column: ${({ isWide }) => (isWide ? '1 / 3' : 'initial')};
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
`

const FilterResult = styled.div`
  font-size: 8px;
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 10px;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }
`

const FilterButtonIcon = styled.div`
  display: flex;
  margin-right: 7px;
`

const FilterButtonAfter = styled.div`
  margin-left: auto;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
`

const SubmitButton = styled(Touchable)<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.border : 'linear-gradient(91.43deg, #ffb545 0.82%, #ff9900 100%)'};
  border-radius: ${({ theme }) => theme.radius.main};
  justify-content: center;
  width: 100%;
  outline: none;
  border: none;
  height: 50px;
  ${({ theme, disabled }) =>
    buildFont({
      size: '14-20',
      weight: 'semi',
      color: disabled ? theme.colors.secondary : theme.colors.textColorWhite
    })}
`

const PlannerBuilder: FC<PlannerBuilder> = ({ onSubmit }) => {
  const { plannerStore } = useStore()
  const city = plannerStore.buildRoute.city?.name
  const dateFrom = plannerStore.buildRoute.dateFrom
  const dateTo = plannerStore.buildRoute.dateTo

  const enabledSubmit = city && dateFrom && dateTo

  return (
    <Root>
      <Filter>
        <FilterButton isWide onClick={() => plannerStore.setActiveModal('cities')}>
          <FilterButtonIcon>
            <IconPlacemark size={15} />
          </FilterButtonIcon>

          {city ? (
            <>
              <FilterResult>
                Город <span>{plannerStore.buildRoute.city?.name}</span>
              </FilterResult>
              <FilterButtonAfter
                onClick={e => {
                  e.stopPropagation()
                  plannerStore.resetCity()
                }}
              >
                <IconClose size={20} />
              </FilterButtonAfter>
            </>
          ) : (
            'Город'
          )}
        </FilterButton>
        <FilterButton onClick={() => plannerStore.setActiveModal('calendar')}>
          <FilterButtonIcon>
            <IconCalendar size={15} />
          </FilterButtonIcon>
          {dateFrom ? (
            <FilterResult>
              Туда{' '}
              <span>
                <DateFormatter value={dateFrom} format='DD MMMM' />
              </span>
            </FilterResult>
          ) : (
            'Туда'
          )}
        </FilterButton>
        <FilterButton onClick={() => plannerStore.setActiveModal('calendar')}>
          <FilterButtonIcon>
            <IconCalendar size={15} />
          </FilterButtonIcon>
          {dateTo ? (
            <FilterResult>
              Обратно{' '}
              <span>
                <DateFormatter value={dateTo} format='DD MMMM' />
              </span>
            </FilterResult>
          ) : (
            'Обратно'
          )}
        </FilterButton>
      </Filter>
      <SubmitButton disabled={false} onClick={onSubmit}>
        Построить маршрут
      </SubmitButton>
    </Root>
  )
}

export default PlannerBuilder
