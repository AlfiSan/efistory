import Endpoint from './endpoint';
import toCamelCase from '../utils/caseConverter';
import ApiClient from './apiClient';
import uniq from 'lodash/uniq';

export const getData = async (params) => {
  try {
    let response = await ApiClient({
      method: 'GET',
      url: Endpoint.GET_LIST,
      data: params,
    });

    const data = await response.map((item, index) => ({
      ...item,
      id: item.uuid,
    }));

    return toCamelCase(data);
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getArea = async () => {
  try {
    let response = await ApiClient({
      method: 'GET',
      url: Endpoint.GET_AREA,
    });

    const province = uniq(response.map((item) => item.province)).map(
      (i) => ({
        key: i,
        value: i,
      })
    );

    const list = response.data;

    return { province, list };
  } catch (e) {
    console.error(e);
    return { province: [], list: [] };
  }
};

export const getSize = async () => {
  try {
    let response = await ApiClient({
      method: 'GET',
      url: Endpoint.GET_SIZE,
    });

    const size = response.map((item) => ({
      ...item,
    }));

    return size;
  } catch (e) {
    console.error(e);
    return [];
  }
};
