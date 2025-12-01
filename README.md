## 📝 Implementation Notes


### Rate Updates

- The CNB API updates rates once a day, no updates on weekends.
- Current implementation fetches on-demand for simplicity.
- Better: cron job daily sync.

### Historical Data

- Separate tables or materialized views can store daily snapshots.
- Allows constructing trends efficiently.

### Concurrency

- In-memory `fetchingPromise` prevents duplicate API calls.
- Returns cached data if API fails.
