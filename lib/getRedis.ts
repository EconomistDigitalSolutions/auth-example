import { createClient } from 'redis';

export const getRedis = async () => {
  const redis = createClient({
    url: 'redis://127.0.0.1:6379'
  });
  await redis.connect();
  return redis;
}