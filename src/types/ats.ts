export type CandidateStage =
  | 'applied'
  | 'screening'
  | 'interview'
  | 'offer'
  | 'hired'
  | 'rejected';

export type JobStatus = 'open' | 'draft' | 'closed';

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  status: JobStatus;
  applicants: number;
  postedAt: string;
  description: string;
};

export type Candidate = {
  id: string;
  name: string;
  email: string;
  phone: string;
  jobId: string;
  jobTitle: string;
  stage: CandidateStage;
  rating: number;
  appliedAt: string;
  location: string;
  experience: string;
  avatar: string;
  source: string;
  tags: string[];
  resumeUrl?: string;
  notes?: string;
};

export type InterviewEvent = {
  id: string;
  candidateId: string;
  candidateName: string;
  jobTitle: string;
  type: 'Phone Screen' | 'Technical' | 'On-site' | 'Final';
  date: string;
  time: string;
  interviewer: string;
  status: 'scheduled' | 'completed' | 'cancelled';
};

export const STAGE_LABELS: Record<CandidateStage, string> = {
  applied: 'Applied',
  screening: 'Screening',
  interview: 'Interview',
  offer: 'Offer',
  hired: 'Hired',
  rejected: 'Rejected',
};

export const STAGE_COLORS: Record<CandidateStage, string> = {
  applied: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  screening: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  interview: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  offer: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  hired: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  rejected: 'bg-red-500/20 text-red-300 border-red-500/30',
};
