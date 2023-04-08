export function getCookieOptions() {
    const expires = new Date();
    expires.setTime(expires.getTime() + 60 * 60 * 1000);    return {
      expires: expires,
      httpOnly: true,
      secure: true // set Secure flag
    };
  }


  export function getCookieOptionsR() {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1); // expires in 1 day
    return {
      expires: expires,
      httpOnly: true,
      secure: true // set Secure flag
    };

    
  }