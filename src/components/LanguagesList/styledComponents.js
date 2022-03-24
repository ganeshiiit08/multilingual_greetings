import styled from 'styled-components'

export const TabItem = styled.li`
  width: 30%;
`
export const Button = styled.button`
  background-color: ${props => (props.active ? '#db1c48' : '#ffffff')};
  border: solid 1px #db1c48;
  border-radius: 20px;
  width: 100px;
  height: 40px;
`
