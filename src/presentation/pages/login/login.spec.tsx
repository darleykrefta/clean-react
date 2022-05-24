import React from 'react'

import { render, RenderResult, screen } from '@testing-library/react'

import Login from './login'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login />)
  return {
    sut
  }
}

describe('Login component', () => {
  it('Should start with initial state', () => {
    makeSut()
    const errorWrap = screen.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = screen.getByText('Entrar') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const emailStatus = screen.getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = screen.getByTestId('password-status')
    expect(passwordStatus.textContent).toBe('🔴')
  })
})
