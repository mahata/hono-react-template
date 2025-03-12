import { render } from 'vitest-browser-react'
import { expect, test } from 'vitest'
import Top from './Top'

test('loads and displays greeting', async () => {
  const screen = render(<Top />)

  await expect.element(screen.getByText("Vite + React")).toBeInTheDocument()
})
