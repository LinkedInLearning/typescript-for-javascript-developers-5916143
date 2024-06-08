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

export function updateRelationshipStatus(userId: number, status: Relationship['status'], newStatus: Relationship['status']): string {
  const relationshipIndex = relationships.findIndex(r => r.userIds.includes(userId));
  if (relationshipIndex > -1) {
    const updatedRelationship: Partial<Relationship> = {
      ...relationships[relationshipIndex],
      status: newStatus
    };
    relationships[relationshipIndex] = updatedRelationship as Relationship;
    return `Status updated to ${newStatus}`;
  }
  return 'Relationship not found';
}
