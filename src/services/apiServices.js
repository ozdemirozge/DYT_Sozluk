
import axios from 'axios';
import router from '../constants/router';
import helpers from '../helpers';
import navigationService from './navigationService';
import { apiUrl } from '../../app.json'

export default function callApi(url, data, hsuccess, herror) {

  helpers.getStroge('userData').then(a => {
    axios({
      headers: {
        'Content-Type': data ? 'application/json' : '*',
        'Authorization': a ? 'bearer ' + a.access_token : null
      },
      method: data ? 'post' : 'get',
      url: url,
      data: data ? JSON.stringify(data) : null,
    }).then((response) => {
      hsuccess(response.data)
    }).catch(function (error) {
      if (error.response.status == '401') {
        getRefreshToken(a.refresh_token, (res) => {
          a.access_token = res.data.access_token;
          helpers.setStorage('userData', a).then(c => {
            callApi(url, data, null, (herror) => {
              helpers.removeValue('userData').then(b => {
                navigationService.navigate(router.login)
              })
            })
          })
        })
      }
      console.log('There has been a problem with your fetch operation: ' + error);
      throw error;
    });
  });
}

function getRefreshToken(refreshToken, hsuccess) {

  helpers.getStroge('userData').then(a => {

    axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      url: apiUrl + '/auth/getTokenByRefreshToken',
      data: JSON.stringify({
        refreshToken: refreshToken
      }),
    }).then((response) => {
      hsuccess(response.data)

    }).catch(function (error) {
      console.log('There has been a problem with your fetch operation: ' + error);
      throw error;
    });
  });

}
