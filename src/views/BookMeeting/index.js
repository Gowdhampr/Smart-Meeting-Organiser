import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from "formik";

// Components
import Card from '../../components/Core/Card';
import LabelComponent from "../../components/Core/Label";
import DatePickerField from '../../components/Core/DatePicker';
import FieldLabelComponent from '../../components/Core/FieldLabel';

// Action
import { bookMeetingRoom } from "../../actions/bookMeeting";
import { fetchDashboardDetails } from "../../actions/dashboard";

export const BookMeeting = () => {
    const dispatch = useDispatch();

    const handleSubmit = values => {
        dispatch(bookMeetingRoom(values));
        dispatch(fetchDashboardDetails());
    }

    const handleClearLocalStorage = () => {
        window.localStorage.removeItem("dashboardCount");
        dispatch(fetchDashboardDetails());
    }

    const { rooms, meeting } = useSelector(state => state.dashboard);

    const buildingList= [{label: "Building 1", value: 1}, {label: "Building 2", value: 2}];
    return (
        <div>
            <LabelComponent className="text-center">
                Book a Meeting
            </LabelComponent>

            <div className="availabilityContainer d-flex">
                <Card title="Rooms">
                    <div className="">
                        <p>Total: {rooms.total}</p>
                        <p>Free Now: {rooms.available}</p>
                    </div>
                </Card>

                <Card title="Meetings">
                    <div className="">
                        <p>Total {meeting.total} Today</p>
                        <p>Total {meeting.onGoing} Going on now</p>
                    </div>
                </Card>
            </div>

            <div className="meetingCardWrapper">
                <Card title="Rooms">
                    <div className="form-group bookMeetingContainer">
                        <Formik
                            initialValues={{ date: "", startTime: "", endTime: "", building: "1" }}
                            onSubmit={values => {
                                handleSubmit(values);
                            }}
                            >
                            {props => {
                                const {
                                values, 
                                handleChange,
                                handleSubmit,
                                handleReset
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        {/* Date Picker */}
                                        <FieldLabelComponent>
                                            Start Date
                                        </FieldLabelComponent>
                                        <div>
                                            <DatePickerField name="date" required />
                                        </div>
                                        {/* Start Time */}
                                        <FieldLabelComponent>
                                            Start Time
                                        </FieldLabelComponent>
                                        <input
                                            placeholder="Enter your start time"
                                            type="text"
                                            name="startTime"
                                            value={values.startTime}
                                            onChange={handleChange}
                                            required
                                        />
                                        {/* End Time */}
                                        <FieldLabelComponent>
                                            End Time
                                        </FieldLabelComponent>
                                        <input
                                            placeholder="Enter your end time"
                                            type="text"
                                            name="endTime"
                                            value={values.endTime}
                                            onChange={handleChange}
                                            required
                                        />
                                        {/* End Time */}
                                        <FieldLabelComponent>
                                            Select Building
                                        </FieldLabelComponent>
                                        <div>
                                            <select name="building" onChange={handleChange} required>
                                                {buildingList.map(option => {
                                                    return <option value={option.value} key={option.value} >{option.label}</option>
                                                })}
                                            </select>
                                        </div>
                                        
                                        <button
                                            type="button"
                                            className="outline"
                                            onClick={handleReset}
                                        >
                                            Reset
                                        </button>
                                        <button type="submit" disabled={!rooms.available}>
                                            Submit
                                        </button>
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                </Card>

                {/* Clear local storage */}
                <button
                    type="button"
                    className="outline"
                    onClick={handleClearLocalStorage}
                >
                    Clear Storage
                </button>
            </div>
        </div>
    )
}

export default BookMeeting;
