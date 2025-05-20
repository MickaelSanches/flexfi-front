// src/viewmodels/useDashboardViewModel.ts
import { useEffect, useState } from "react";
import { authRepository } from "../repository/authRepository";
import { waitlistRepository } from "../repository/waitlistRepository";
import { useAuthStore } from "../store/authStore";

export const useDashboardViewModel = () => {
  const user = useAuthStore((state) => state.user);

  const [userReferralCode, setUserReferralCode] = useState("");
  const [formFullfilled, setFormFullfilled] = useState<boolean | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [rank, setRank] = useState(0);
  const [referralsCount, setReferralsCount] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const points = useAuthStore((s) => s.points);
  const setPoints = useAuthStore((s) => s.setPoints);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (!user) return;

        if (user.userReferralCode) setUserReferralCode(user.userReferralCode);
        if (typeof user.formFullfilled === "boolean")
          setFormFullfilled(user.formFullfilled);
        if (typeof user.isVerified === "boolean")
          setIsVerified(user.isVerified);

        const userPoints = await authRepository.getCurrentUserPoints();
        setPoints(userPoints.data.points);

        const userRank = await authRepository.getCurrentUserRank();
        setRank(userRank.data.rank);

        if (user.userReferralCode) {
          const count = await waitlistRepository.getReferralCount(
            user.userReferralCode
          );
          setReferralsCount(count);
        }
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      }
    };

    fetchUserInfo();
  }, []);

  const handleResendVerification = async () => {
    try {
      setIsResending(true);
      if (!user?.email) throw new Error("Missing email");
      await authRepository.resendVerificationEmail(user.email);
      setResendSuccess(true);
    } catch (err) {
      console.error("Resend error:", err);
    } finally {
      setIsResending(false);
    }
  };

  const handleCopy = () => {
    if (userReferralCode) {
      navigator.clipboard.writeText(userReferralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const refreshData = async () => {
    const userPoints = await authRepository.getCurrentUserPoints();
    setPoints(userPoints.data.points);

    const userRank = await authRepository.getCurrentUserRank();
    setRank(userRank.data.rank);
  };

  return {
    userReferralCode,
    formFullfilled,
    isVerified,
    points,
    rank,
    referralsCount,
    isResending,
    resendSuccess,
    copied,
    handleCopy,
    handleResendVerification,
    refreshData,
  };
};
