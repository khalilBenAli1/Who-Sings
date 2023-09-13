import Constants from "expo-constants";
import { UserCredentials } from "./types";


const { MUSIXMATCH_API_KEY }: any = Constants?.manifest?.extra;

export const isEmpty = (value: string): boolean => {
  return value.length === 0;
};

export const isShorterThan = (value: string, length: number): boolean => {
  return value.length < length;
};

export const isValidEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const emailValidationError = (email: string): string => {
  if (isEmpty(email)) return "can't be blank";
  if (isShorterThan(email, 6)) return "must be at least 6 characters";
  if (!isValidEmail(email)) return "must be a valid email address";
  return "";
};

export const validateSignup = (credentials: UserCredentials) => {
  const emailError = emailValidationError(credentials.email);
  if (emailError) return emailError;

  if (isEmpty(credentials.name)) return "Name can't be blank";

  if (isEmpty(credentials.password)) return "Password can't be blank";

  if (credentials.password !== credentials.confirmPassword)
    return "Passwords do not match";

  return null;
};

export const fetchTopSongs = async () => {
  const response = await fetch(
    `/api/chart.tracks.get?apikey=${MUSIXMATCH_API_KEY}&page=1&page_size=30&country=us`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error("Error fetching songs:", response.statusText);
  }
};

export const fetchLyricsForSong = async (trackId: string) => {
  const response = await fetch(
    `/api/matcher.lyrics.get?apikey=${MUSIXMATCH_API_KEY}&track_id=${trackId}`
  );
  if (response.ok) {
    const data = await response.json();
    if (data?.message?.body?.lyrics?.lyrics_body) {
      return data?.message?.body?.lyrics?.lyrics_body;
    }
  } else {
    console.error("Error fetching lyrics:", response.statusText);
  }
};

export const COLORPARTICIPANTS:string[] = [
  "#D7B4BF",
  "#D5D4E5",
  "#A1B3D1",
  "#82C9D1",
  "#56B8D1",
  "#A59FA9",
  "#EBD7D6",
  "#D6DEDD",
  "#BCCEC9",
  "#CFB8C0",
  "#F4F0E3",
  "#DAD4DE",
  "#BBB4DA",
  "#7B9DD2",
  "#70C7C6",
  "#7C9ACC",
  "#90B7CF",
  "#B3DDCD",
  "#D0E7DA",
  "#E8BED3",
]

export const fastHash = (str: string): number => {
  const seed = 0
  let h1 = 0xdeadbeef ^ seed
  let h2 = 0x41c6ce57 ^ seed
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
  return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}
