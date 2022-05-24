import React from 'react'

import { render, RenderResult, screen, fireEvent, cleanup } from '@testing-library/react'

import Login from './login'
import { Validation } from '@/presentation/protocols/validation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
  errorMessage: string
  input: object

  validate(input: object): string {
    this.input = input
    return this.errorMessage
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('Login component', () => {
  afterEach(cleanup)

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

  it('Should call validation with correct email', () => {
    const { validationSpy } = makeSut()
    const emailInput = screen.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: 'any_email' } })
    expect(validationSpy.input).toEqual({
      email: 'any_email',
      password: ''
    })
  })

  it('Should call validation with correct password', () => {
    const { validationSpy } = makeSut()
    const passwordInput = screen.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: 'any_password' } })
    expect(validationSpy.input).toEqual({
      email: '',
      password: 'any_password'
    })
  })
})
