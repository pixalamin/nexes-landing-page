<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return inertia('Welcome', [
            'title' => 'Home - Nexes AI'
        ]);
    }

    public function features()
    {
        return inertia('Features', [
            'title' => 'Features - Nexes AI'
        ]);
    }

    public function aiNotes()
    {
        return inertia('AiNotes', [
            'title' => 'AI Notes - Nexes AI'
        ]);
    }

    public function aiQuiz()
    {
        return inertia('AiQuiz', [
            'title' => 'AI Quiz - Nexes AI'
        ]);
    }

    public function aiFlashcard()
    {
        return inertia('AiFlashcard', [
            'title' => 'AI Flashcard - Nexes AI'
        ]);
    }

    public function questionAnswer()
    {
        return inertia('QuestionAnswer', [
            'title' => 'Question Answer - Nexes AI'
        ]);
    }

    public function template()
    {
        $response = Http::get('https://app.nexes.ai/api/get-templates');

        return inertia('Template', [
            'title' => 'Templates - Nexes AI',
            'templates' => $response->json()
        ]);
    }

    public function singleTemplate()
    {
        return inertia('SingleTemplate', [
            'title' => 'Single Template - Nexes AI'
        ]);
    }

    public function workflow()
    {
        $response = Http::get('https://app.nexes.ai/api/get-workflows');

        return inertia('Workflow', [
            'title' => 'Workflows - Nexes AI',
            'workflows' => $response->json()
        ]);
    }

    public function pricing()
    {
        return inertia('Pricing', [
            'title' => 'Pricing - Nexes AI'
        ]);
    }

    public function contactUs()
    {
        return inertia('ContactUs', [
            'title' => 'Contact Us - Nexes AI'
        ]);
    }

    public function privacyPolicy()
    {
        return inertia('PrivacyPolicy', [
            'title' => 'Privacy Policy - Nexes AI'
        ]);
    }

    public function refundPolicy()
    {
        return inertia('RefundPolicy', [
            'title' => 'Refund Policy - Nexes AI'
        ]);
    }

    public function termsOfService()
    {
        return inertia('TermsOfService', [
            'title' => 'Terms of Service - Nexes AI'
        ]);
    }

    public function support()
    {
        return inertia('Support', [
            'title' => 'Support - Nexes AI'
        ]);
    }

    public function changeLog()
    {
        return inertia('ChangeLog', [
            'title' => 'Change Log - Nexes AI'
        ]);
    }

    public function roadmap()
    {
        return inertia('Roadmap', [
            'title' => 'Roadmap - Nexes AI'
        ]);
    }

    public function affiliate()
    {
        return inertia('Affiliate', [
            'title' => 'Affiliate Program - Nexes AI'
        ]);
    }

    public function books()
    {
        $response = Http::get('https://app.nexes.ai/api/get-books');

        return inertia('Books', [
            'title' => 'Books - Nexes AI',
            'books' => $response->json()
        ]);
    }

    public function aiChat()
    {
        return inertia('AiChat', [
            'title' => 'AI Chat - Nexes AI'
        ]);
    }
    
    public function blogs()
    {
        return inertia('Blogs', [
            'title' => 'Blogs - Nexes AI'
        ]);
    }

    public function blog($slug)
    {
        return inertia('Blog', [
            'title' => 'Blog - Nexes AI'
        ]);
    }

    public function student()
    {
        return inertia('Student', [
            'title' => 'Student - Nexes AI'
        ]);
    }

    public function teacher()
    {
        return inertia('Teacher', [
            'title' => 'Teacher - Nexes AI'
        ]);
    }

    public function creator ()
    {
        return inertia('Creator',[
            'title' => 'Creator - Nexes AI'
        ]);
    }

    public function professional ()
    {
        return inertia('Professional',[
            'title' => 'Professional - Nexes AI'
        ]);
    }

    public function business ()
    {
        return inertia('Business',[
            'title' => 'Business - Nexes AI'
        ]);
    }

    public function institution ()
    {
        return inertia('Institution',[
            'title' => 'Institution - Nexes AI'
        ]);
    }
} 
