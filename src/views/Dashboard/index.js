import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

// Components
import Card from '../../components/Core/Card';
import LabelComponent from "../../components/Core/Label";
import { ButtonFilled } from '../../components/Core/ButtonFilled';

// Actions
import { fetchDashboardDetails } from "../../actions/dashboard";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildingList: ["Building 1", "Building 2"]
        };
      }

    componentDidMount() {
        this.props.actions.fetchDashboardDetails();
    }

    handleSubmit(e) {
    }
    render() {
        const { buildings, rooms, meeting } = this.props.dashboardData;
        return (
            <div>
    
                <LabelComponent className="text-center">
                    Check Availability
                </LabelComponent>
                <div className="cardWrapper d-flex">
                    <Card title="Buildings">
                        <div className="">
                            <p>Total: {buildings.total}</p>
                        </div>
                    </Card>
    
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
                <Link  to={`/book-meeting`} className={"text-decoration-none"}>
                    <ButtonFilled label="Add a Meeting" />
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dashboardData: state.dashboard
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
          fetchDashboardDetails
        },
        dispatch
      )
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
