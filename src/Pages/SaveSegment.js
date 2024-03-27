import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const SaveSegment = () => {

    return (
        <div className="main_container">

            <div className="savesegment_container__inner">
                <header>
                    <MdArrowBackIos size={25} />
                    View Audience
                </header>

                <Link to="/save" className="save_btn">
                    Save Segment
                </Link>
            </div>
        </div>
    );
};

export default SaveSegment;
