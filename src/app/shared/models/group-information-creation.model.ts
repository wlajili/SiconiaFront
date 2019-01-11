export class GroupInformationCreation {
    constructor(public groupId: number,
        public groupName: string,
        public groupCreationDate: string,
        public groupCreator: string,
        public groupDescription: string,
        public groupType: string,
        public energyType: string,
        public isFavorite: boolean) { }
}
