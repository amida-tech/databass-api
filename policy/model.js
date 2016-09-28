const SQ = require('sequelize');
const db = require('../database');

const Policy = db.define('policy', {
  PolicyNumber: SQ.TEXT,
  PolicySubsection: SQ.DOUBLE,
  PolicyTitle: SQ.TEXT,
  PrimaryAuthor: SQ.TEXT,
  CurrentEditor: SQ.TEXT,
  UpdatedBy: SQ.TEXT,
  Automated: SQ.BOOLEAN,
  AssignedDate: SQ.STRING, // Change to Timestamp?
  FirstActivity: SQ.TEXT,
  FirstActivityDate: SQ.STRING, // Change to Timestamp?
  LastActivity: SQ.TEXT,
  LastActivityDate: SQ.STRING, // Change to Timestamp?
  BCA_Adopted: SQ.TEXT,
  Disclosure: SQ.BOOLEAN,
  UpdateCategory: SQ.TEXT,
  CoverageChange: SQ.TEXT,
  CodeChange: SQ.BOOLEAN,
  NewCodeUpdate: SQ.BOOLEAN,
  AutoChange: SQ.BOOLEAN,
  AutoNotified: SQ.BOOLEAN,
  SummaryOfChange: SQ.TEXT,
  MN: SQ.BOOLEAN,
  NMN: SQ.BOOLEAN,
  Cosmetic: SQ.BOOLEAN,
  Experimental: SQ.BOOLEAN,
  StartUpdate: SQ.STRING, // Timestamp?
  MP_TeamPosted: SQ.STRING, // Timestamp?
  MPMD_ApprovalDate: SQ.STRING, // Timestamp?
  HCSCMD_TargetDate: SQ.STRING, // Timestamp?
  HCSCMD_PostedDate: SQ.STRING, // TImestamp?
  HCSCMD_SignOffDt: SQ.STRING, // Timestamp?
  HCSCMD_SignOff: SQ.BOOLEAN,
  IDR_TargetDate: SQ.STRING, // Timestamp?
  IDR_PostedDate: SQ.STRING, // Timestamp?
  IDR_SignOffDate: SQ.STRING, // Timestamp?
  IDR_SignOff: SQ.BOOLEAN,
  ER_TargetDate: SQ.STRING, // Timestamp?
  ER_PostedDate: SQ.STRING, // Timestamp?
  ER_SignOffDate: SQ.STRING, // Timestamp?
  ER_SignOFF: SQ.BOOLEAN,
  WebEditTargetDate: SQ.STRING, // Timestamp?
  WebEditPostedDate: SQ.STRING, // Timestamp?
  WebReady: SQ.BOOLEAN,
  WebReadyDate: SQ.STRING, // Timestamp?
  WebFirmTarget: SQ.BOOLEAN,
  WebTargetDate: SQ.STRING, // Timestamp?
  WebPostedDate: SQ.STRING, // Timestamp?
  NewWebPostedDate: SQ.STRING, // Timestamp?
  EffectiveTargetDate: SQ.STRING, // Timestamp?
  EffectiveDate: SQ.STRING, // Timestamp?
  NewEffectiveDate: SQ.STRING, // Timestamp?
  LastUpdate: SQ.STRING, // Timestamp?
  LastMPMD_ActivityDate: SQ.STRING, // Timestamp?
  Specialty: SQ.TEXT,
  Select: SQ.BOOLEAN,
  Selected: SQ.TEXT,
  BCA_ck1: SQ.BOOLEAN,
  BCA_ck2: SQ.BOOLEAN,
  BCATargetDt: SQ.STRING, // Timestamp?
  WebEdit: SQ.BOOLEAN
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['PolicyNumber']
      }
    ],
    tableName: 'Policies',
    timestamps: false
  }
);

Policy.removeAttribute('id');

module.exports = Policy;