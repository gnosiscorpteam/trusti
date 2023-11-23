import React from "react";

const QuestionCard = ({children}) => {
    return(
        <div className="px-[5vw] xs:px-[15vw] pt-[10vh]">
                <div className="bg-[#f1f1f1] py-[5vh] rounded-n px-4">
                    {children}
                </div>
            </div>
    );
}

export default QuestionCard;