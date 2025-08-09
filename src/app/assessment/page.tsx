"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Brain, Code, Database } from 'lucide-react';

interface Option {
  value: string;
  text: string;
  nextQuestion?: string;
  weight: {
    automation: number;
    analysis: number;
    integration: number;
  };
}

interface Question {
  id: string;
  text: string;
  options: Option[];
}

interface Scores {
  automation: number;
  analysis: number;
  integration: number;
}

export default function Assessment() {
  const router = useRouter();
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('start');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [scores, setScores] = useState<Scores>({
    automation: 0,
    analysis: 0,
    integration: 0,
  });

  const questions: Record<string, Question> = {
    start: {
      id: 'start',
      text: "What is your primary goal for implementing AI?",
      options: [
        {
          value: 'automation',
          text: "Automate business processes",
          nextQuestion: 'data_readiness',
          weight: { automation: 5, analysis: 2, integration: 3 },
        },
        {
          value: 'analysis',
          text: "Gain insights from data",
          nextQuestion: 'data_readiness',
          weight: { automation: 2, analysis: 5, integration: 3 },
        },
        {
          value: 'integration',
          text: "Integrate AI into existing systems",
          nextQuestion: 'data_readiness',
          weight: { automation: 3, analysis: 3, integration: 5 },
        },
      ],
    },
    data_readiness: {
      id: 'data_readiness',
      text: "How would you describe your current data infrastructure?",
      options: [
        {
          value: 'advanced',
          text: "Well-organized with established processes",
          nextQuestion: 'team_experience',
          weight: { automation: 4, analysis: 4, integration: 4 },
        },
        {
          value: 'intermediate',
          text: "Basic systems in place",
          nextQuestion: 'team_experience',
          weight: { automation: 3, analysis: 3, integration: 3 },
        },
        {
          value: 'beginner',
          text: "Just getting started",
          nextQuestion: 'team_experience',
          weight: { automation: 1, analysis: 1, integration: 1 },
        },
      ],
    },
    team_experience: {
      id: 'team_experience',
      text: "What is your team's experience with AI technologies?",
      options: [
        {
          value: 'expert',
          text: "Experienced team in place",
          nextQuestion: 'results',
          weight: { automation: 4, analysis: 4, integration: 4 },
        },
        {
          value: 'learning',
          text: "Learning and developing skills",
          nextQuestion: 'results',
          weight: { automation: 2, analysis: 2, integration: 2 },
        },
        {
          value: 'novice',
          text: "No prior experience",
          nextQuestion: 'results',
          weight: { automation: 1, analysis: 1, integration: 1 },
        },
      ],
    },
  };

  const handleAnswer = (option: Option) => {
    const newAnswers = { ...answers, [currentQuestionId]: option.value };
    setAnswers(newAnswers);

    setScores({
      automation: scores.automation + option.weight.automation,
      analysis: scores.analysis + option.weight.analysis,
      integration: scores.integration + option.weight.integration,
    });

    if (option.nextQuestion === 'results') {
      generateRecommendations();
    } else if (option.nextQuestion) {
      setCurrentQuestionId(option.nextQuestion);
    } else {
      setCurrentQuestionId('start');
    }
  };
  const [primaryFocus, setPrimaryFocus] = useState<string>('automation');

  const generateRecommendations = () => {
    const maxScore = Math.max(scores.automation, scores.analysis, scores.integration);
    let newPrimaryFocus = 'automation';
    if (scores.analysis === maxScore) newPrimaryFocus = 'data analysis';
    if (scores.integration === maxScore) newPrimaryFocus = 'system integration';
    setPrimaryFocus(newPrimaryFocus);
    setCurrentQuestionId('results');
  };
  const handleScheduleConsultation = () => {
    // Pass assessment scores to the schedule page via URL query or localStorage
    const query = new URLSearchParams({ scores: JSON.stringify(scores) }).toString();
    router.push(`/schedule?${query}`);
  };

  const currentQuestion = questions[currentQuestionId];

  if (currentQuestionId === 'results') {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-gray-900 border-gray-800 p-8">
            <h2 className="text-2xl font-bold mb-6">Your AI Readiness Assessment Results</h2>
            <div className="space-y-6">
              <div className="p-6 bg-black rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Recommended Focus Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Brain className="h-6 w-6 text-blue-500 mr-3" />
                    <div className="flex-1">
                      <p className="font-medium">Process Automation Potential</p>
                      <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                        <div
                          className="bg-blue-500 rounded-full h-2"
                          style={{ width: `${(scores.automation / 13) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Database className="h-6 w-6 text-purple-500 mr-3" />
                    <div className="flex-1">
                      <p className="font-medium">Data Analysis Readiness</p>
                      <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                        <div
                          className="bg-purple-500 rounded-full h-2"
                          style={{ width: `${(scores.analysis / 13) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-6 w-6 text-green-500 mr-3" />
                    <div className="flex-1">
                      <p className="font-medium">Integration Capability</p>
                      <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                        <div
                          className="bg-green-500 rounded-full h-2"
                          style={{ width: `${(scores.integration / 13) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300">
  Based on your assessment, your organization shows the strongest potential in{' '}
  <span className="text-blue-500 font-semibold">{primaryFocus}</span>.
  {primaryFocus === 'automation' && (
    " Our analysis suggests focusing on streamlining your processes through AI automation."
  )}
  {primaryFocus === 'data analysis' && (
    " We recommend prioritizing data analytics capabilities to unlock valuable insights."
  )}
  {primaryFocus === 'system integration' && (
    " Your organization would benefit most from integrating AI into your existing systems."
  )}
</p>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                onClick={handleScheduleConsultation}
              >
                <span className="flex items-center justify-center">
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-gray-900 border-gray-800 p-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{currentQuestion.text}</h2>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="w-full p-4 text-left rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-200"
                  onClick={() => handleAnswer(option)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}