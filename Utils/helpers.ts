import Constants from "expo-constants";
import { UserCredentials } from "./types";
import axios from "axios";
import api from "./api";

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
