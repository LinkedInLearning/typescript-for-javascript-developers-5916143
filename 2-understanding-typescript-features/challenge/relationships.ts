import { User } from './users';

interface Relationship {
  userIds: [number, number];
  status: 'requested' | 'connected' | 'blocked';
}

const relationships: Relationship[] = [];

export function addRelationship(relationship: Relationship): void {
  relationships.push(relationship);
}

export function getRelationshipStatus(userOneId: number, userTwoId: number): string {
  const relation = relationships.find(r =>
    (r.userIds[0] === userOneId && r.userIds[1] === userTwoId) ||
    (r.userIds[0] === userTwoId && r.userIds[1] === userOneId));
  return relation ? relation.status : 'no relationship';
}
