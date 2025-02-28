import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom"; // <-- Import this
import { io } from "socket.io-client";
import SimplePeer from "simple-peer";
import "../styles/videoInterview.css";

const socket = io("http://localhost:5000");

const VideoInterview = () => {
  const [stream, setStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const userVideo = useRef();
  const peerVideo = useRef();
  const [searchParams] = useSearchParams();
  const candidateId = searchParams.get("candidateId"); // <-- Get candidate ID

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        if (userVideo.current) userVideo.current.srcObject = currentStream;
        socket.emit("join-room", `interviewRoom-${candidateId}`); // Unique room per candidate
      });

    socket.on("call-user", ({ signal }) => {
      const newPeer = new SimplePeer({
        initiator: false,
        trickle: false,
        stream,
      });

      newPeer.signal(signal);
      newPeer.on("stream", (remoteStream) => {
        if (peerVideo.current) peerVideo.current.srcObject = remoteStream;
      });

      setPeer(newPeer);
    });

    return () => {
      socket.off("call-user");
    };
  }, [candidateId]);

  const callPeer = () => {
    const newPeer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream,
    });

    newPeer.on("signal", (signal) => {
      socket.emit("call-user", { signal });
    });

    newPeer.on("stream", (remoteStream) => {
      if (peerVideo.current) peerVideo.current.srcObject = remoteStream;
    });

    setPeer(newPeer);
  };

  return (
    <div className="video-interview-container">
      <h2>Interviewing Candidate {candidateId}</h2>
      <div className="video-container">
        <video ref={userVideo} autoPlay playsInline muted className="video-box" />
        <video ref={peerVideo} autoPlay playsInline className="video-box" />
      </div>
      {!peer && <button onClick={callPeer} className="start-call-btn">Start Interview</button>}
    </div>
  );
};

export default VideoInterview;
