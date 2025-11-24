import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-matrix-rain',
  standalone: true,
  templateUrl: './matrix-rain.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatrixRainComponent implements AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId?: number;

  ngAfterViewInit(): void {
    try {
      this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
      this.startAnimation();
    } catch (e) {
      console.error("Could not get canvas context", e);
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  startAnimation(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops: number[] = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    // A more vibrant and varied color palette
    const colors = [
      'rgba(139, 92, 246, 0.8)',  // vibrant violet-500
      'rgba(59, 130, 246, 0.8)',  // vibrant blue-500
      'rgba(34, 197, 94, 0.8)',   // vibrant green-500
      'rgba(6, 182, 212, 0.7)',   // vibrant cyan-500
      'rgba(168, 85, 247, 0.7)',  // vibrant purple-500
      'rgba(74, 222, 128, 0.7)',  // vibrant green-400
    ];

    const draw = () => {
      // Use a higher alpha value (e.g., 0.2 vs 0.15) for the fillStyle to make trails fade faster.
      // This results in a shorter, less obtrusive background trail effect.
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      this.ctx.fillRect(0, 0, canvas.width, canvas.height);

      this.ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        // Set a random color from the palette for each character
        this.ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        this.ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const animate = () => {
      draw();
      this.animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
  }
}