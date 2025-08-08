/**
 * Huawei Mock Exam JavaScript Application
 * This application handles the complete exam flow including:
 * - Question management and navigation
 * - Timer functionality
 * - Answer tracking and validation
 * - Results calculation and display
 * - User interface interactions
 * - Multiple mock exam selection
 * - Page refresh protection
 */

// Application State Management
class ExamApp {
    constructor() {
        // Initialize application state
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeRemaining = 5400; // 1.5 hours (90 minutes) in seconds
        this.timerInterval = null;
        this.examStartTime = null;
        this.examEndTime = null;
        this.selectedMock = 1;
        this.examInProgress = false;
        this.mockQuestions = null; // Will hold loaded questions from JSON
        
        // Initialize the application
        this.init();
    }

    /**
     * Initialize the application by setting up event listeners and preparing the UI
     */
    async init() {
        console.log('Initializing Huawei Mock Exam Application...');
        
        // Load questions from JSON file
        await this.loadMockQuestions();
        
        this.setupEventListeners();
        this.setupPageProtection();
        this.disableTextSelection();
        this.showPage('home-page');
    }

    /**
     * Load mock questions from JSON file
     */
    async loadMockQuestions() {
        try {
            console.log('Loading mock questions from JSON file...');
            const response = await fetch('mock-questions.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            this.mockQuestions = data.mockExams;
            
            console.log(`Successfully loaded ${Object.keys(this.mockQuestions).length} mock exams`);
            
            // Update the question count display for the default mock
            this.updateQuestionCount();
            
        } catch (error) {
            console.error('Error loading mock questions:', error);
            
            // Fallback to show error message
            this.showErrorMessage('Failed to load exam questions. Please refresh the page and try again.');
        }
    }

    /**
     * Show error message to user
     */
    showErrorMessage(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #e53e3e;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: 500;
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);
        
        // Remove error message after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }

    /**
     * Update question count display
     */
    updateQuestionCount() {
        if (this.mockQuestions && this.mockQuestions[this.selectedMock]) {
            const questionCount = document.getElementById('question-count');
            if (questionCount) {
                questionCount.textContent = this.mockQuestions[this.selectedMock].questions.length;
            }
        }
    }

    /**
     * Disable text selection and copy functionality
     */
    disableTextSelection() {
        // Disable right-click context menu
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });

        // Disable copy shortcuts
        document.addEventListener('keydown', (e) => {
            // Disable Ctrl+C, Ctrl+A, Ctrl+V, Ctrl+S, F12, Ctrl+Shift+I, Ctrl+U
            if ((e.ctrlKey && (e.key === 'c' || e.key === 'a' || e.key === 'v' || e.key === 's' || e.key === 'u')) ||
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
                return false;
            }
        });

        // Disable drag and drop
        document.addEventListener('dragstart', (e) => {
            e.preventDefault();
            return false;
        });

        // Disable selection with mouse
        document.addEventListener('selectstart', (e) => {
            e.preventDefault();
            return false;
        });
    }

    /**
     * Setup page refresh and close protection
     */
    setupPageProtection() {
        window.addEventListener('beforeunload', (e) => {
            if (this.examInProgress) {
                const message = 'Are you sure you want to leave? Your exam progress will be lost.';
                e.returnValue = message;
                return message;
            }
        });

        // Also protect against back button during exam
        window.addEventListener('popstate', (e) => {
            if (this.examInProgress) {
                const leave = confirm('Are you sure you want to leave the exam? Your progress will be lost.');
                if (!leave) {
                    window.history.pushState(null, '', window.location.href);
                }
            }
        });
    }

    /**
     * Set up all event listeners for the application
     */
    setupEventListeners() {
        // Home page - Start exam button
        const startExamBtn = document.getElementById('start-exam-btn');
        startExamBtn?.addEventListener('click', () => this.startExam());

        // Mock selection buttons
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('mock-btn')) {
                this.selectMock(event.target);
            }
        });

        // Question page - Next question button
        const nextQuestionBtn = document.getElementById('next-question-btn');
        nextQuestionBtn?.addEventListener('click', () => this.nextQuestion());

        // Question page - Submit exam button
        const submitExamBtn = document.getElementById('submit-exam-btn');
        submitExamBtn?.addEventListener('click', () => this.submitExam());

        // Question page - Stop exam button
        const stopExamBtn = document.getElementById('stop-exam-btn');
        stopExamBtn?.addEventListener('click', () => this.stopExam());

        // Results page - View answers button
        const viewAnswersBtn = document.getElementById('view-answers-btn');
        viewAnswersBtn?.addEventListener('click', () => this.toggleDetailedAnswers());

        // Results page - Retake exam button
        const retakeExamBtn = document.getElementById('retake-exam-btn');
        retakeExamBtn?.addEventListener('click', () => this.retakeExam());

        // Handle answer selection
        document.addEventListener('change', (event) => {
            if (event.target.name === 'answer') {
                this.handleAnswerSelection(event.target.value);
            }
        });

        // Keyboard navigation support
        document.addEventListener('keydown', (event) => {
            this.handleKeyboardNavigation(event);
        });
    }

    /**
     * Select a mock exam
     */
    selectMock(mockBtn) {
        // Remove active class from all mock buttons
        document.querySelectorAll('.mock-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to selected button
        mockBtn.classList.add('active');

        // Store selected mock
        this.selectedMock = parseInt(mockBtn.dataset.mock);

        // Update question count display
        this.updateQuestionCount();

        console.log(`Selected Mock ${this.selectedMock}`);
        
        // Log mock details if available
        if (this.mockQuestions && this.mockQuestions[this.selectedMock]) {
            const mockData = this.mockQuestions[this.selectedMock];
            console.log(`Mock Title: ${mockData.title}`);
            console.log(`Question Count: ${mockData.questions.length}`);
        }
    }

    /**
     * Get questions for the currently selected mock
     */
    getCurrentMockQuestions() {
        if (!this.mockQuestions) {
            console.warn('Mock questions not loaded yet');
            return [];
        }
        
        const mockData = this.mockQuestions[this.selectedMock];
        return mockData ? mockData.questions : [];
    }

    /**
     * Handle keyboard navigation for accessibility
     */
    handleKeyboardNavigation(event) {
        const currentPage = document.querySelector('.page.active');
        
        if (currentPage && currentPage.id === 'question-page') {
            // Number keys 1-4 for answer selection
            if (event.key >= '1' && event.key <= '4') {
                const answerIndex = parseInt(event.key) - 1;
                const radioButtons = document.querySelectorAll('input[name="answer"]');
                if (radioButtons[answerIndex]) {
                    radioButtons[answerIndex].checked = true;
                    this.handleAnswerSelection(radioButtons[answerIndex].value);
                }
            }
            
            // Enter key for next question
            if (event.key === 'Enter') {
                const nextBtn = document.getElementById('next-question-btn');
                const submitBtn = document.getElementById('submit-exam-btn');
                
                if (nextBtn && !nextBtn.disabled) {
                    this.nextQuestion();
                } else if (submitBtn && submitBtn.style.display !== 'none') {
                    this.submitExam();
                }
            }
        }
    }

    /**
     * Show a specific page and hide others
     */
    showPage(pageId) {
        console.log(`Showing page: ${pageId}`);
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show the requested page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }

    /**
     * Start the exam - initialize timer and show first question
     */
    startExam() {
        console.log('Starting exam...');
        
        // Check if questions are loaded
        if (!this.mockQuestions) {
            this.showErrorMessage('Exam questions are still loading. Please wait a moment and try again.');
            return;
        }
        
        const currentQuestions = this.getCurrentMockQuestions();
        if (currentQuestions.length === 0) {
            this.showErrorMessage('No questions available for the selected mock exam.');
            return;
        }
        
        // Set exam in progress flag
        this.examInProgress = true;
        
        // Show loading screen briefly for better UX
        this.showLoadingScreen();
        
        setTimeout(() => {
            // Reset exam state
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            this.timeRemaining = 5400; // Reset to 1.5 hours
            this.examStartTime = new Date();
            
            // Initialize user answers array
            this.userAnswers = new Array(currentQuestions.length).fill(null);
            
            // Show question page and start timer
            this.showPage('question-page');
            this.startTimer();
            this.displayQuestion();
            this.hideLoadingScreen();
        }, 1000);
    }

    /**
     * Show loading screen
     */
    showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'flex';
        }
    }

    /**
     * Hide loading screen
     */
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }

    /**
     * Start the exam timer
     */
    startTimer() {
        const timerDisplay = document.getElementById('timer-display');
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            
            // Update timer display
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timerDisplay) {
                timerDisplay.textContent = timeString;
                
                // Add warning class when time is running low (last 5 minutes)
                if (this.timeRemaining <= 300) {
                    timerDisplay.classList.add('warning');
                }
            }
            
            // End exam when time runs out
            if (this.timeRemaining <= 0) {
                console.log('Time\'s up! Auto-submitting exam...');
                this.submitExam();
            }
        }, 1000);
    }

    /**
     * Stop the exam timer
     */
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    /**
     * Display the current question and its options
     */
    displayQuestion() {
        const currentQuestions = this.getCurrentMockQuestions();
        const question = currentQuestions[this.currentQuestionIndex];
        const questionText = document.getElementById('question-text');
        const answerOptions = document.getElementById('answer-options');
        const questionCounter = document.getElementById('question-counter');
        const progressFill = document.getElementById('progress-fill');
        
        console.log(`Displaying question ${this.currentQuestionIndex + 1}: ${question.question}`);
        
        // Update question text
        if (questionText) {
            questionText.textContent = question.question;
        }
        
        // Update progress indicator
        if (questionCounter) {
            questionCounter.textContent = `Question ${this.currentQuestionIndex + 1} of ${currentQuestions.length}`;
        }
        
        // Update progress bar
        if (progressFill) {
            const progress = ((this.currentQuestionIndex + 1) / currentQuestions.length) * 100;
            progressFill.style.width = `${progress}%`;
        }
        
        // Generate answer options
        if (answerOptions) {
            answerOptions.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'answer-option';
                
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = 'answer';
                radioInput.value = index;
                radioInput.id = `option-${index}`;
                
                // Check if this option was previously selected
                if (this.userAnswers[this.currentQuestionIndex] === index) {
                    radioInput.checked = true;
                    optionDiv.classList.add('selected');
                }
                
                const label = document.createElement('label');
                label.htmlFor = `option-${index}`;
                label.textContent = option;
                
                optionDiv.appendChild(radioInput);
                optionDiv.appendChild(label);
                
                // Add click handler for the entire option div
                optionDiv.addEventListener('click', () => {
                    radioInput.checked = true;
                    this.handleAnswerSelection(index);
                });
                
                answerOptions.appendChild(optionDiv);
            });
        }
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    /**
     * Handle answer selection
     */
    handleAnswerSelection(answerIndex) {
        console.log(`Answer selected: ${answerIndex} for question ${this.currentQuestionIndex + 1}`);
        
        // Store the answer
        this.userAnswers[this.currentQuestionIndex] = parseInt(answerIndex);
        
        // Update UI to show selection
        document.querySelectorAll('.answer-option').forEach((option, index) => {
            option.classList.toggle('selected', index === parseInt(answerIndex));
        });
        
        // Enable next button
        const nextBtn = document.getElementById('next-question-btn');
        const submitBtn = document.getElementById('submit-exam-btn');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
        if (submitBtn) {
            submitBtn.disabled = false;
        }
    }

    /**
     * Update navigation buttons based on current question
     */
    updateNavigationButtons() {
        const nextBtn = document.getElementById('next-question-btn');
        const submitBtn = document.getElementById('submit-exam-btn');
        
        const currentQuestions = this.getCurrentMockQuestions();
        const isLastQuestion = this.currentQuestionIndex === currentQuestions.length - 1;
        const hasAnswer = this.userAnswers[this.currentQuestionIndex] !== null;
        
        if (nextBtn && submitBtn) {
            if (isLastQuestion) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-block';
                submitBtn.disabled = !hasAnswer;
            } else {
                nextBtn.style.display = 'inline-block';
                submitBtn.style.display = 'none';
                nextBtn.disabled = !hasAnswer;
            }
        }
    }

    /**
     * Move to the next question
     */
    nextQuestion() {
        const currentQuestions = this.getCurrentMockQuestions();
        if (this.currentQuestionIndex < currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
            
            // Scroll to top of question
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    /**
     * Submit the exam and show results
     */
    submitExam() {
        console.log('Submitting exam...');
        
        // Set exam no longer in progress
        this.examInProgress = false;
        
        // Stop the timer
        this.stopTimer();
        this.examEndTime = new Date();
        
        // Show loading screen
        this.showLoadingScreen();
        
        setTimeout(() => {
            // Calculate and display results
            this.calculateResults();
            this.showPage('results-page');
            this.hideLoadingScreen();
            
            // Scroll to top of results
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    }

    /**
     * Stop the exam early and show results for answered questions
     */
    stopExam() {
        console.log('Stopping exam early...');
        
        // Confirm with user
        const confirmed = confirm('Are you sure you want to stop the exam? You will get results based on the questions you have answered so far.');
        
        if (confirmed) {
            // Set exam no longer in progress
            this.examInProgress = false;
            
            // Stop the timer
            this.stopTimer();
            this.examEndTime = new Date();
            
            // Show loading screen
            this.showLoadingScreen();
            
            setTimeout(() => {
                // Calculate and display results
                this.calculateResults();
                this.showPage('results-page');
                this.hideLoadingScreen();
                
                // Scroll to top of results
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1000);
        }
    }

    /**
     * Calculate exam results and update the results page
     */
    calculateResults() {
        console.log('Calculating results...');
        
        const currentQuestions = this.getCurrentMockQuestions();
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        let unansweredQuestions = 0;
        
        // Count correct, incorrect, and unanswered questions
        currentQuestions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correctAnswer) {
                correctAnswers++;
            } else if (this.userAnswers[index] !== null && this.userAnswers[index] !== undefined) {
                incorrectAnswers++;
            } else {
                unansweredQuestions++;
            }
        });
        
        const totalQuestions = currentQuestions.length;
        const answeredQuestions = correctAnswers + incorrectAnswers;
        const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
        
        console.log(`Results: ${correctAnswers}/${totalQuestions} correct (${percentage}%)`);
        console.log(`Answered: ${answeredQuestions}/${totalQuestions}, Unanswered: ${unansweredQuestions}`);
        
        // Update results display
        this.updateResultsDisplay(correctAnswers, incorrectAnswers, totalQuestions, percentage, unansweredQuestions);
        
        // Generate detailed answers
        this.generateDetailedAnswers();
    }

    /**
     * Update the results display with calculated scores
     */
    updateResultsDisplay(correct, incorrect, total, percentage, unanswered = 0) {
        // Update score elements
        const scorePercentage = document.getElementById('score-percentage');
        const correctAnswersEl = document.getElementById('correct-answers');
        const incorrectAnswersEl = document.getElementById('incorrect-answers');
        const totalQuestionsEl = document.getElementById('total-questions');
        const feedbackMessage = document.getElementById('feedback-message');
        
        if (scorePercentage) scorePercentage.textContent = `${percentage}%`;
        if (correctAnswersEl) correctAnswersEl.textContent = correct;
        if (incorrectAnswersEl) incorrectAnswersEl.textContent = incorrect;
        if (totalQuestionsEl) totalQuestionsEl.textContent = total;
        
        // Generate feedback message
        let feedbackHTML = '';
        let feedbackClass = '';
        
        // Add note about unanswered questions if any
        const unansweredNote = unanswered > 0 ? ` Note: ${unanswered} questions were not answered.` : '';
        
        if (percentage >= 90) {
            feedbackClass = 'feedback-excellent';
            feedbackHTML = `
                <h3>🎉 Excellent Work!</h3>
                <p>Outstanding performance! You've demonstrated excellent knowledge of Huawei security concepts. You're well-prepared for the actual certification exam.${unansweredNote}</p>
            `;
        } else if (percentage >= 80) {
            feedbackClass = 'feedback-good';
            feedbackHTML = `
                <h3>👍 Great Job!</h3>
                <p>Very good performance! You have a solid understanding of Huawei security concepts. Review the questions you missed and you'll be ready for certification.${unansweredNote}</p>
            `;
        } else if (percentage >= 70) {
            feedbackClass = 'feedback-good';
            feedbackHTML = `
                <h3>✅ Good Progress!</h3>
                <p>You're on the right track! You've reached the passing threshold, but there's room for improvement. Focus on the areas where you missed questions.${unansweredNote}</p>
            `;
        } else if (percentage >= 50) {
            feedbackClass = 'feedback-needs-improvement';
            feedbackHTML = `
                <h3>📚 Keep Studying!</h3>
                <p>You're making progress, but need more preparation. Review the study materials and focus on understanding the fundamental concepts. Practice more mock exams.${unansweredNote}</p>
            `;
        } else {
            feedbackClass = 'feedback-poor';
            feedbackHTML = `
                <h3>💪 Don't Give Up!</h3>
                <p>This is a learning opportunity! Review the study materials thoroughly and take time to understand each concept. Consider additional training resources before retaking.${unansweredNote}</p>
            `;
        }
        
        if (feedbackMessage) {
            feedbackMessage.className = `feedback-message ${feedbackClass}`;
            feedbackMessage.innerHTML = feedbackHTML;
        }
        
        // Animate score circle
        this.animateScoreCircle(percentage);
    }

    /**
     * Animate the score circle for visual effect
     */
    animateScoreCircle(percentage) {
        const scoreCircle = document.querySelector('.score-circle');
        if (scoreCircle) {
            // Set gradient color based on score
            let gradientColor;
            if (percentage >= 80) {
                gradientColor = 'linear-gradient(135deg, #48bb78, #38a169)'; // Green
            } else if (percentage >= 70) {
                gradientColor = 'linear-gradient(135deg, #4299e1, #3182ce)'; // Blue
            } else if (percentage >= 50) {
                gradientColor = 'linear-gradient(135deg, #ed8936, #dd6b20)'; // Orange
            } else {
                gradientColor = 'linear-gradient(135deg, #e53e3e, #c53030)'; // Red
            }
            
            scoreCircle.style.background = gradientColor;
        }
    }

    /**
     * Generate detailed answers for review
     */
    generateDetailedAnswers() {
        const answerReviewList = document.getElementById('answer-review-list');
        if (!answerReviewList) return;
        
        const currentQuestions = this.getCurrentMockQuestions();
        answerReviewList.innerHTML = '';
        
        currentQuestions.forEach((question, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'answer-review-item';
            
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correctAnswer;
            const isCorrect = userAnswer === correctAnswer;
            
            let reviewHTML = `
                <div class="review-question">
                    <strong>Question ${index + 1}:</strong> ${question.question}
                </div>
                <div class="review-answers">
            `;
            
            question.options.forEach((option, optionIndex) => {
                let answerClass = 'not-selected';
                let prefix = '';
                
                if (optionIndex === correctAnswer) {
                    answerClass = 'correct';
                    prefix = '✓ ';
                } else if (optionIndex === userAnswer && !isCorrect) {
                    answerClass = 'user-incorrect';
                    prefix = '✗ ';
                } else if (userAnswer === null || userAnswer === undefined) {
                    answerClass = 'unanswered';
                    if (optionIndex === correctAnswer) {
                        answerClass = 'correct';
                        prefix = '✓ ';
                    }
                }
                
                reviewHTML += `
                    <div class="review-answer ${answerClass}">
                        ${prefix}${option}
                    </div>
                `;
            });
            
            // Add status indicator
            let statusHTML = '';
            if (userAnswer === null || userAnswer === undefined) {
                statusHTML = '<div class="review-status unanswered">❓ Not Answered</div>';
            } else if (isCorrect) {
                statusHTML = '<div class="review-status correct">✅ Correct</div>';
            } else {
                statusHTML = '<div class="review-status incorrect">❌ Incorrect</div>';
            }
            
            reviewHTML += statusHTML;
            
            // Add explanation if available
            if (question.explanation) {
                reviewHTML += `
                    <div class="review-explanation">
                        <strong>Explanation:</strong> ${question.explanation}
                    </div>
                `;
            }
            
            reviewHTML += '</div>';
            reviewItem.innerHTML = reviewHTML;
            answerReviewList.appendChild(reviewItem);
        });
    }

    /**
     * Toggle detailed answers visibility
     */
    toggleDetailedAnswers() {
        const detailedAnswers = document.getElementById('detailed-answers');
        const viewAnswersBtn = document.getElementById('view-answers-btn');
        
        if (detailedAnswers && viewAnswersBtn) {
            const isVisible = detailedAnswers.style.display !== 'none';
            
            if (isVisible) {
                detailedAnswers.style.display = 'none';
                viewAnswersBtn.textContent = 'View Detailed Answers';
            } else {
                detailedAnswers.style.display = 'block';
                viewAnswersBtn.textContent = 'Hide Detailed Answers';
                
                // Scroll to detailed answers
                detailedAnswers.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    /**
     * Retake the exam - reset everything and start over
     */
    retakeExam() {
        console.log('Retaking exam...');
        
        // Reset all state
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeRemaining = 5400;
        this.examStartTime = null;
        this.examEndTime = null;
        this.examInProgress = false;
        
        // Stop any running timer
        this.stopTimer();
        
        // Hide detailed answers
        const detailedAnswers = document.getElementById('detailed-answers');
        if (detailedAnswers) {
            detailedAnswers.style.display = 'none';
        }
        
        // Reset view answers button
        const viewAnswersBtn = document.getElementById('view-answers-btn');
        if (viewAnswersBtn) {
            viewAnswersBtn.textContent = 'View Detailed Answers';
        }
        
        // Go back to home page
        this.showPage('home-page');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Initialize the application when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing Huawei Mock Exam Application...');
    
    // Create and start the exam application
    window.examApp = new ExamApp();
    
    console.log('Application ready for use!');
});
