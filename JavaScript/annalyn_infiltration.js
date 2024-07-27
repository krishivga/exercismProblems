// @ts-check

export function canExecuteFastAttack(knightIsAwake) {
  // Checking if knight is awake. It is an inverse relationship, so we just inverse the input. If awake, we don't attack. If asleep, we do.
  return !knightIsAwake;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  // Can only spy if at least one of three is awake, use OR statements to track condition.
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  // Can only signal prisoner if they are awake and the arhcer is asleep.
  return prisonerIsAwake && !archerIsAwake;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  /*
  Two cases here:
  Case 1: Dog is present. If the dog is, and the archer is asleep, we can free the prisoner.
  Case 2: Dog isn't present but if both archer and knight are asleep and the prisoner is awkae, we can free them.
  */
  return (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && !archerIsAwake && !knightIsAwake && prisonerIsAwake);
}
