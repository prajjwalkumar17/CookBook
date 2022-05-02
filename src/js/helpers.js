import { async } from 'regenerator-runtime';
import { TIMEOUT_SECONDS } from './config.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async function (Url) {
  try {
    const unFilteredRes = await Promise.race([
      fetch(Url),
      timeout(TIMEOUT_SECONDS),
    ]);
    const realRes = await unFilteredRes.json();
    if (!unFilteredRes.ok)
      throw new Error(`${realRes.message} (${unFilteredRes.status})`);
    return realRes;
  } catch (err) {
    throw err;
  }
};
