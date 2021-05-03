import { FC } from 'react'
import styled from 'styled-components'
import { IconPlacemark } from '~components/icons/IconPlacemark'
import { IconCalendar } from '~components/icons/IconCalendar'

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

const FilterButtonIcon = styled.div`
  display: flex;
  margin-right: 7px;
`

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  background: linear-gradient(91.43deg, #ffb545 0.82%, #ff9900 100%);
  border-radius: ${({ theme }) => theme.radius.main};
  justify-content: center;
  width: 100%;
  outline: none;
  border: none;
  height: 50px;
  color: ${({ theme }) => theme.colors.textColorWhite};
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`

const PlannerBuilder: FC = () => {
  return (
    <Root>
      <Filter>
        <FilterButton isWide>
          <FilterButtonIcon>
            <IconPlacemark size={15} />
          </FilterButtonIcon>
          Город
        </FilterButton>
        <FilterButton>
          <FilterButtonIcon>
            <IconCalendar size={15} />
          </FilterButtonIcon>
          Туда
        </FilterButton>
        <FilterButton>
          <FilterButtonIcon>
            <IconCalendar size={15} />
          </FilterButtonIcon>
          Обратно
        </FilterButton>
      </Filter>
      <SubmitButton>Построить маршрут</SubmitButton>
    </Root>
  )
}

export default PlannerBuilder
