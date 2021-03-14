import {
  BOOK_MEETING_ROOM,
} from "../constants/ActionTypes";

/**
 * Request to book a meeting room
 */
export function bookMeetingRoom(data) {
  return {
    type: BOOK_MEETING_ROOM,
    payLoad: data
  };
}
