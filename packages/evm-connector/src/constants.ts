import type { EIP1193Provider } from './types';

declare global {
  interface Window {
    ethereum: EIP1193Provider | null;
  }
}
const HAS_WINDOW = typeof window !== 'undefined';
export const WINDOW = HAS_WINDOW ? window : null;
export const TESTNET_URL = 'https://testnet.fuel.network/v1/graphql';
export const METAMASK_ICON =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMTguNiAzMTguNiI+CiAgPHN0eWxlPgogICAgLnN0MSwuc3Q2e2ZpbGw6I2U0NzYxYjtzdHJva2U6I2U0NzYxYjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9LnN0NntmaWxsOiNmNjg1MWI7c3Ryb2tlOiNmNjg1MWJ9CiAgPC9zdHlsZT4KICA8cGF0aCBmaWxsPSIjZTI3NjFiIiBzdHJva2U9IiNlMjc2MWIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTI3NC4xIDM1LjUtOTkuNSA3My45TDE5MyA2NS44eiIvPgogIDxwYXRoIGQ9Im00NC40IDM1LjUgOTguNyA3NC42LTE3LjUtNDQuM3ptMTkzLjkgMTcxLjMtMjYuNSA0MC42IDU2LjcgMTUuNiAxNi4zLTU1LjN6bS0yMDQuNC45TDUwLjEgMjYzbDU2LjctMTUuNi0yNi41LTQwLjZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0ibTEwMy42IDEzOC4yLTE1LjggMjMuOSA1Ni4zIDIuNS0yLTYwLjV6bTExMS4zIDAtMzktMzQuOC0xLjMgNjEuMiA1Ni4yLTIuNXpNMTA2LjggMjQ3LjRsMzMuOC0xNi41LTI5LjItMjIuOHptNzEuMS0xNi41IDMzLjkgMTYuNS00LjctMzkuM3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTIxMS44IDI0Ny40LTMzLjktMTYuNSAyLjcgMjIuMS0uMyA5LjN6bS0xMDUgMCAzMS41IDE0LjktLjItOS4zIDIuNS0yMi4xeiIvPgogIDxwYXRoIGZpbGw9IiMyMzM0NDciIHN0cm9rZT0iIzIzMzQ0NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMTM4LjggMTkzLjUtMjguMi04LjMgMTkuOS05LjF6bTQwLjkgMCA4LjMtMTcuNCAyMCA5LjF6Ii8+CiAgPHBhdGggZmlsbD0iI2NkNjExNiIgc3Ryb2tlPSIjY2Q2MTE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xMDYuOCAyNDcuNCA0LjgtNDAuNi0zMS4zLjl6TTIwNyAyMDYuOGw0LjggNDAuNiAyNi41LTM5Ljd6bTIzLjgtNDQuNy01Ni4yIDIuNSA1LjIgMjguOSA4LjMtMTcuNCAyMCA5LjF6bS0xMjAuMiAyMy4xIDIwLTkuMSA4LjIgMTcuNCA1LjMtMjguOS01Ni4zLTIuNXoiLz4KICA8cGF0aCBmaWxsPSIjZTQ3NTFmIiBzdHJva2U9IiNlNDc1MWYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTg3LjggMTYyLjEgMjMuNiA0Ni0uOC0yMi45em0xMjAuMyAyMy4xLTEgMjIuOSAyMy43LTQ2em0tNjQtMjAuNi01LjMgMjguOSA2LjYgMzQuMSAxLjUtNDQuOXptMzAuNSAwLTIuNyAxOCAxLjIgNDUgNi43LTM0LjF6Ii8+CiAgPHBhdGggZD0ibTE3OS44IDE5My41LTYuNyAzNC4xIDQuOCAzLjMgMjkuMi0yMi44IDEtMjIuOXptLTY5LjItOC4zLjggMjIuOSAyOS4yIDIyLjggNC44LTMuMy02LjYtMzQuMXoiIGNsYXNzPSJzdDYiLz4KICA8cGF0aCBmaWxsPSIjYzBhZDllIiBzdHJva2U9IiNjMGFkOWUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTE4MC4zIDI2Mi4zLjMtOS4zLTIuNS0yLjJoLTM3LjdsLTIuMyAyLjIuMiA5LjMtMzEuNS0xNC45IDExIDkgMjIuMyAxNS41aDM4LjNsMjIuNC0xNS41IDExLTl6Ii8+CiAgPHBhdGggZmlsbD0iIzE2MTYxNiIgc3Ryb2tlPSIjMTYxNjE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xNzcuOSAyMzAuOS00LjgtMy4zaC0yNy43bC00LjggMy4zLTIuNSAyMi4xIDIuMy0yLjJoMzcuN2wyLjUgMi4yeiIvPgogIDxwYXRoIGZpbGw9IiM3NjNkMTYiIHN0cm9rZT0iIzc2M2QxNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMjc4LjMgMTE0LjIgOC41LTQwLjgtMTIuNy0zNy45LTk2LjIgNzEuNCAzNyAzMS4zIDUyLjMgMTUuMyAxMS42LTEzLjUtNS0zLjYgOC03LjMtNi4yLTQuOCA4LTYuMXpNMzEuOCA3My40bDguNSA0MC44LTUuNCA0IDggNi4xLTYuMSA0LjggOCA3LjMtNSAzLjYgMTEuNSAxMy41IDUyLjMtMTUuMyAzNy0zMS4zLTk2LjItNzEuNHoiLz4KICA8cGF0aCBkPSJtMjY3LjIgMTUzLjUtNTIuMy0xNS4zIDE1LjkgMjMuOS0yMy43IDQ2IDMxLjItLjRoNDYuNXptLTE2My42LTE1LjMtNTIuMyAxNS4zLTE3LjQgNTQuMmg0Ni40bDMxLjEuNC0yMy42LTQ2em03MSAyNi40IDMuMy01Ny43IDE1LjItNDEuMWgtNjcuNWwxNSA0MS4xIDMuNSA1Ny43IDEuMiAxOC4yLjEgNDQuOGgyNy43bC4yLTQ0Ljh6IiBjbGFzcz0ic3Q2Ii8+Cjwvc3ZnPg==';
export const SIGNATURE_STORAGE_KEY = 'FL-EVM-SIG';
