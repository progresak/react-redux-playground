import React from "react";
import faker from "faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const CommentsApp = () => {
    return (
        <div className={'ui container comments'}>
            <ApprovalCard>
                <div>
                    <h4>BACHA!</h4>
                    Are you sure you want it?
                </div>

            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={'Same'}
                    timeAgo={'Dnes'}
                    image={faker.image.avatar()}
                    content={"Skvělé ano skvělé"}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author={'Alex'}
                    timeAgo={'Večer'}
                    image={faker.image.avatar()}
                    content={"Trololo..."}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={'Bob'}
                    timeAgo={'Včera'}
                    image={faker.image.avatar()}
                    content={"Fu..omg"}/>
            </ApprovalCard>
        </div>
    );
};

export default CommentsApp;