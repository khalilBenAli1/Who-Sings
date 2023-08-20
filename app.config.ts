import 'dotenv/config';

export default {
  expo: {
    extra: {
      MUSIXMATCH_API_KEY: process.env.MUSIXMATCH_API_KEY,
    },
  },
};
