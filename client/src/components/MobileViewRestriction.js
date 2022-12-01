import React, { Component } from "react";

class MobileViewRestriction extends Component {
    render() {
        return (
            <div className="mobile-view-message text-center mt-5">
                <div>
                    <h5 className=" fs-5">Oh no!! Mobile View not supported currently</h5>
                    <span className="fs-6">If this is not a error or you're viewing in desktop view, try refresh the page</span>
                </div>
            </div>
        );
    }
}

export default MobileViewRestriction