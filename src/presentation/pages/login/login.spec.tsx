import React from 'react'

import { render, screen } from '@testing-library/react'

import Login from './login'

describe('Login component', () => {
  it('Should start with initial state', () => {
    render(<Login />)
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
