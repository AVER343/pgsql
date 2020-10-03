CREATE TABLE episodes(
    id SERIAL PRIMARY KEY,
    "episodeTime" BIGINT NOT NULL,
    "patient_id" int NOT NULL,
    "complaintType" VARCHAR(20),  
    FOREIGN KEY ("patient_id") REFERENCES patients(id) 
);