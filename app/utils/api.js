import axios from "axios";

axios.defaults.baseURL = 'https://ease.space/';
//axios.defaults.baseURL = '192.168.0.22';

const basic_get = (url, params) => {
  return axios.get(url, {params: params})
      .then(response => {
        return response.data;
      })
      .catch(err => {
        throw err.response.data;
      });
};

const basic_post = (url, params) => {
  return axios.post(url, params)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        throw err.response.data;
      });
};

export default api = {
  post: {
    connection: ({email,password}) => {
      return basic_post('/api/rest/Connection', {
        email:email,
        password:password
      });
    },
    passwordCopied: ({app}) => {
      return basic_post('/api/v1/trackEvent', {
        name: 'PasswordUsed',
        data: {
          id: app.id,
          type: app.type,
          sub_type: app.sub_type,
          from: 'CopyFromMobile'
        }
      })
    }
  },
  get: {
    fetchMyInformation: () => {
      return basic_get('/api/v1/common/GetMyInformation');
    },
    fetchPersonalSpace: () => {
      return basic_get('/api/rest/GetProfiles');
    },
    getPersonalAndTeamSpace: () => {
      return basic_get('/api/rest/GetPersonalAndTeamSpace');
    },
    getTeamRoomApps: ({team_id, room_id}) => {
      return basic_get('/api/rest/GetRoomApps', {
        team_id: team_id,
        room_id: room_id
      });
    },
    getGroupApps: ({group_id}) => {
      return basic_get('/api/rest/GetGroupApps', {
        group_id: group_id
      });
    }
  }
};