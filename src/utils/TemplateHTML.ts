class TemplateHTML {
    public static templateSendEmailVerification = (token: string): string => {
        return `
        <!DOCTYPE html>
            <html lang="en">
              <head></head>
              <body>
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tbody>
                    <tr>
                      <td style="padding-bottom: 30px;" class="m_-2031883786922804868pb-25">
                        <table width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="
                                  padding-bottom: 42px;
                                  border-bottom: 2px solid #e5e5e5;
                                "
                                class="m_-2031883786922804868pb-20"
                              >
                                <div
                                  class="m_-2031883786922804868h1-c"
                                  style="
                                    color: #003368;
                                    font-family: 'Montserrat', Arial, sans-serif;
                                    font-size: 30px;
                                    line-height: 48px;
                                    text-align: center;
                                    font-weight: bold;
                                  "
                                >
                                  <span style="color: #003368; text-decoration: none;">
                                    Verifikasi Email Anda
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
            
                    <tr>
                      <td style="padding: 0 30px;" class="m_-2031883786922804868p0-10">
                        <table width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tbody>
                            <tr>
                              <td style="padding-bottom: 30px;">
                                <div
                                  class="m_-2031883786922804868text-c"
                                  style="
                                    color: #4c4c4c;
                                    font-family: 'Montserrat', Arial, sans-serif;
                                    font-size: 14px;
                                    line-height: 20px;
                                    text-align: center;
                                  "
                                >
                                  Mohon untuk verifikasi email anda dengan klik tombol
                                  dibawah ini
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
            
                    <tr>
                      <td
                        style="padding: 0 0 30px;"
                        class="m_-2031883786922804868pb-50"
                        align="center"
                      >
                        <table cellspacing="0" cellpadding="0" border="0">
                          <tbody>
                            <tr>
                              <td
                                class="m_-2031883786922804868text-button"
                                style="
                                  border-radius: 30px;
                                  padding: 15px 30px;
                                  color: #ffffff;
                                  font-family: 'Montserrat', Arial, sans-serif;
                                  font-size: 14px;
                                  line-height: 18px;
                                  text-align: center;
                                  letter-spacing: 2px;
                                  text-transform: uppercase;
                                "
                                bgcolor="#003368"
                              >
                                <a
                                  href="${process.env.BASE_URL}/api/v1/auth/verify/${token}"
                                  rel="noopener noreferrer"
                                  style="color: #ffffff; text-decoration: none;"
                                  target="_blank"
                                  data-saferedirecturl=""
                                >
                                  <span
                                    class="m_-2031883786922804868link-white"
                                    style="color: #ffffff; text-decoration: none;"
                                  >
                                    VERIFIKASI
                                  </span>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </body>
            </html>
        `
    }

    public static templateSuccessEmailVerification = (data: string): string => {
        return `
        <!DOCTYPE html>
            <html lang="en">
              <head></head>
              <body>
                <div style="text-align: center">
                    <h1 style="color: green">${data}</h1>
                    <p>Silahkan login kembali</p>
                </div>
              </body>
            </html>
        `
    }
}


export default TemplateHTML;