import React from "react";
import { useParams } from "react-router";

export default function BoardDetail() {
    const {bid} = useParams();
    return(
        <div style={{margin: '20px'}}>
         BoardDetail page, bid={bid}
        </div>
    );
}