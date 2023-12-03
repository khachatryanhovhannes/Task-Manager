function setToken(accessToken: string, remember: boolean) {
  if (remember) {
    document.cookie = `accessToken=${accessToken}; expires=${new Date(
      Date.now() + 3600000
    ).toUTCString()}; path=/;`;
  } else {
    document.cookie = `accessToken=${accessToken}; path=/;`;
  }
}

function getToken() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("accessToken=")) {
      return cookie.substring("accessToken=".length, cookie.length);
    }
  }
  return null;
}

function deleteToken(): void {
  document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
}

export { getToken, deleteToken, setToken };
