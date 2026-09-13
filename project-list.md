# Comic Scout

## User Flow

1. User signs in with Google.
2. User views and manages their comic collection.
3. User can see which issues are missing from a series.
4. App shows comic value information.
5. App shows comics discussed or recommended by a selected YouTube creator.
6. User can search what the creator has said about a specific comic.
7. Search results link to the original video and timestamp.
8. User can add comics they are interested in to a watchlist.

## UI

- Login page
- Dashboard
- Comic collection
- Missing issues
- Watchlist
- YouTube/RAG search

The dashboard should quickly show:
- Comics owned
- Missing issues
- Watchlist comics
- Recent creator recommendations

## Ingestion

### YouTube

For one selected comic-book YouTube channel:

- Get the channel's videos
- Get available transcripts/captions
- Preserve video titles, URLs, dates, and timestamps
- Split transcripts into chunks
- Generate embeddings
- Store the chunks and embeddings
- Use RAG so users can search what the creator has said about comics

Vercel workflow will be used to ensure these ingestions processes are durable and able to retry on failure

### Comic Data

Get comic information from an external source, including:

- Series
- Issue number
- Title
- Cover
- Publisher
- Release date
- Value information

## Database

Use PostgreSQL with pgvector.

Store:

- Users
- Comics
- User collections
- Comic series and issue lists
- Comic values
- Watchlists
- YouTube videos
- Transcript chunks and embeddings
- Comic mentions/recommendations