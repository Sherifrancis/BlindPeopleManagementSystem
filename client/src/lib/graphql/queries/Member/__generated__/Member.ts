/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Member
// ====================================================

export interface Member_member {
  __typename: "Member";
  id: string;
  firstName: string;
  lastName: string;
  birthYear: number;
  gender: string;
  address: string;
  ethnicity: string;
  religion: string;
  occupation: string;
  isCommunistPartisan: boolean;
  marriage: string;
  eyeCondition: string;
  education: string;
  postEducation: string;
  politicalEducation: string;
  governmentAgencyLevel: string;
  brailleComprehension: string;
  languages: string[];
  familiarWIT: boolean;
  healthInsuranceCard: boolean;
  disabilityCert: boolean | null;
  busCard: boolean;
  supportType: string;
  incomeType: string;
  organization_id: string;
}

export interface Member {
  member: Member_member | null;
}

export interface MemberVariables {
  organizationId?: string | null;
  id: string;
}
