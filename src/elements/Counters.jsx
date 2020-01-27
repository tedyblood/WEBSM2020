import React, { Component , Fragment } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import SectionTitle from "../elements/common/SectionTitle";
import CounterOne from "./counters/CounterOne";
import CounterTwo from "./counters/CounterTwo";


class Counters extends Component{
    render(){
        return(
            <Fragment>
                <PageHelmet pageTitle='Counters' />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Counters'}   />
                {/* End Breadcrump Area */}

                {/* Start Counterup Area */}
                <div className="counterup-area ptb--120 bg_color--">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <SectionTitle textColor="" title="Style 01" />
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}


                {/* Start Counterup Area */}
                <div className="counterup-area ptb--120 theme-gradient theme-text-white">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <SectionTitle textColor="text-white" title="Style 02" />
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}

                {/* Start Counterup Area */}
                <div className="counterup-area ptb--120 bg_color--">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <SectionTitle textColor="" title="Style 03" />
                            </div>
                        </div>
                        <CounterTwo />
                    </div>
                </div>
                {/* End Counterup Area */}




            </Fragment>
        )
    }
}
export default Counters;