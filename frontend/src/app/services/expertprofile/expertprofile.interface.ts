export interface ExpertProfile {
    card_id: string;
    name: string;
    description: string;
    banner: string;
    profile_image: string;
}

export interface UpdateExpertProfile {
    name: string;
    description: string;
    banner: string;
    profile_image: string;
}
