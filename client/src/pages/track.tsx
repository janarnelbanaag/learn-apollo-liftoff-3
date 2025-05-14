import React from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";

const Track = () => {
	const { trackId = "" } = useParams();

	return <Layout>track</Layout>;
};

export default Track;
