import styled from "styled-components"

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

export const Label = styled.label`
  color: var(--text-light);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 3px 30px;
`

export const Field = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 0 30px;
  box-shadow: 0 3px 6px var(--shadow);

  &::placeholder {
    color: var(--text-light);
    opacity: 0.65;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 30px 30px;
  box-shadow: 0 3px 6px var(--shadow);
  resize: none;

  &::placeholder {
    color: var(--text-light);
    opacity: 0.65;
  }
`

export const Required = styled.span`
  &::after {
    content: "*";
    color: var(--required);
    font-weight: 800;
  }
`
export const FormTimeControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  gap: 15px;
`

export const FormTitle = styled.h3`
  color: var(--text-light);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0 30px;
`

export const Flex = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`

export const SendButton = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: var(--primary);
  margin: 20px auto;
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 3px 6px var(--shadow);
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-dark);
  }
`
