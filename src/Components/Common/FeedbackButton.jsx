import { memo, useContext, useState } from 'react';
import { FeedbackWorkflow } from "@questlabs/react-sdk";
import { generalFunction } from "../../assets/Config/GeneralFunction";
import { ThemeContext } from './appContext';
import { color } from 'framer-motion';

function FeedbackButton() {
    const [openFeedback, setOpenFeedback] = useState(false);

    const { theme, bgColors, contentConfig } = useContext(ThemeContext)
    return (
        <div className='z-50'>

            <div className="fixed -right-11 top-[50vh] -rotate-90 cursor-pointer" style={{ borderRadius: "6px 6px 0px 0px", padding: "10px 30px", background: bgColors[`${theme}-primary-bg-color-0`], color: "white" }} onClick={() => setOpenFeedback(true)}>
                <p>Feedback</p>
            </div>

            <FeedbackWorkflow
                questIds={[
                    'q-general-feedback',
                    'q-report-a-bug',
                    'q-request-a-feature',
                    'q-contact-us',
                ]}
                userId={generalFunction.getDataFromCookies("questUserId")}
                token={generalFunction.getDataFromCookies("questUserToken")}
                isOpen={openFeedback}
                onClose={() => setOpenFeedback(false)}
                zIndex={11}
                topbarColor={'white'}
                starColor='blue'
                showFooter={true}
                // descriptions={'asfasd'}
                ReportBug={{
                    description: "Help us squash those bugs!"
                }}

                GeneralFeedback={{
                    description: "Your opinions, our improvements.",
                    formDescription: "Really appreciate you submitting a feedback to improve the app",
                }}
                ContactUs={{
                    description:"We're here, let's talk."
                }}
                RequestFeature={{
                    description: "Suggest, we innovate together."
                }}

                // GeneralFeedback={'asdasdf'}
                // descriptions="adfasdf"
                // iconColor={
                //     {
                //         color:'red'
                //     }
                // }

                styleConfig={{
                    listHeading: {

                    },
                    listHover: {
                        // iconColor: "green"
                    },
                    Form: {
                        background: bgColors[`${theme}-primary-bg-color-1`]

                    },
                    PrimaryButton: {
                        background: bgColors[`${theme}-primary-bg-color-0`],
                    },
                    Heading: {
                        fontSize: "20px",
                        color: bgColors[`${theme}-color-premitive-grey-5`]
                    },
                    Description: {
                        fontSize: "12px",
                    },
                    Label: {
                        alignSelf: 'stretch',
                        color: bgColors[`${theme}-color-premitive-grey-6`],
                        fontFamily: 'Figtree',
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: '16px', /* 133.333% */
                    },
                    Footer: {
                        background: bgColors[`${theme}-primary-bg-color-1`]
                    },

                }}
            />

        </div>
    )
}

export default memo(FeedbackButton)