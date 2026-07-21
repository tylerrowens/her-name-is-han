<script lang="ts">
	import Dialogue from '$lib/components/about/Dialogue.svelte';
	import FullQuote from '$lib/components/about/FullQuote.svelte';
	import SimpleQuote from '$lib/components/about/SimpleQuote.svelte';
	import StaggeredQuote from '$lib/components/about/StaggeredQuote.svelte';
</script>

<section class="main-grid page-x">
	<div class="mt-[300px] col-span-17 col-start-8">
		<h1 class="post-title-serif small-caps">Our story</h1>
		<p class="mt-[300px] medium-serif">
			Her name is Han began with the memory of one family’s ordinary days. <br /><br /> Waking up to
			the familiar sound of chopping vegetables in the kitchen. The aroma of steaming soup filling
			the house. Quiet conversations lingering late into the night. Small moments, remembered as
			warmth. <br /><br />Today, her story continues to grow. For some, she's a mother. For some, a
			daughter, and a friend. For others, someone who effortlessly brightens up the moment. Who she
			is may change, but her stories feel familiar.<br /><br /> Her name is Han is a place that turns
			one family’s memory into a living story, connecting us all.
		</p>
		<p class="mt-[100px] korean-secondary">
			Her name is Han은 마치 소설의 첫 문장처럼 들립니다. 이 문장은, 우리를 그녀의 이야기로
			초대합니다. 그녀가 누구인지는 중요하지 않을지도 모릅니다. 하지만 그녀의 이야기는 어딘가
			익숙합니다: 어머니의 사랑, 딸의 기억, 늦은 밤 식사와 조용한 대화를 나누는 친구의 이야기.
			음식은 늘 이야기를 품고 있습니다. 이것은 지금도 살아가는, 우리 모두의 이야기입니다.
		</p>
	</div>
</section>

<section class="main-grid page-x mt-[500px] mb-[500px]"> 
  
	
	<h1 class="sticky top-[50vh] post-title-serif small-caps col-start-4 self-start">
	  press
	</h1> 
  
	<!-- The quotes container starts exactly at column 9 and spans the rest of your layout -->
	<div class="col-start-9 col-span-15"> 
	  <div class="sticky flex justify-self-center rotate-[3.69deg] w-[90%] opacity-95 mb-[500px] top-[120px]"> 
		<FullQuote /> 
	  </div> 
	  <div class="sticky flex justify-self-start rotate-[-1.69deg] w-[70%] opacity-95 mb-[500px] top-[160px]"> 
		<StaggeredQuote /> 
	  </div> 
	  <div class="sticky flex justify-self-end rotate-[7.84deg] w-[49%] opacity-95 mb-[500px] top-[200px]"> 
		<Dialogue /> 
	  </div> 
	  <div class="sticky flex justify-self-end rotate-[-15deg] w-[80%] opacity-95 mb-[500px] top-[120px]"> 
		<SimpleQuote /> 
	  </div> 
	</div> 
  
  </section>
