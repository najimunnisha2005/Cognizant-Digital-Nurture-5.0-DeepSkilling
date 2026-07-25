// Hands-On 6, Step 59: shared Course interface used across services/components/store.
export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
}
