// Using a single worker for all background tasks

// Synchronous Update Tasks
// - push likelihoods
// - compute parent_priors
// - compute visibility / set timers
// DRAW
// - expand (+push to lm_requests_queue)

// Background Tasks
// pop from lm_responses_queue
// update priors
// expand (+push to lm_requests_queue)