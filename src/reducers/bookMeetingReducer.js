import {
    BOOK_MEETING_ROOM
  } from "../constants/ActionTypes";
  
  const initialState = {}
  export function bookMeetingReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case BOOK_MEETING_ROOM: {
          const data = action.payLoad;
          const { buildings, rooms, meeting } = JSON.parse(window.localStorage.getItem("dashboardCount"));
          const updateMeetingBoard = {
            buildings,
            rooms: { total: rooms.total, available: rooms.available > 0 ? rooms.available - 1 : 0},
            meeting: {
              total: meeting.total, onGoing:  meeting.onGoing <= meeting.total ? meeting.onGoing + 1 : 0
            }
          }
          window.localStorage.setItem(meeting.onGoing + 1 + " " + data.date, JSON.stringify(data))
          window.localStorage.setItem("dashboardCount", JSON.stringify(updateMeetingBoard))
        return {...state};
      }
      default:
        return state;
    }
  }
  